import os
import sys

import pandas as pd
from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import Response
from starlette.responses import RedirectResponse
from uvicorn import run as app_run

from sensor.configuration.mongo_db_connection import MongoDBClient
from sensor.constant.application import APP_HOST, APP_PORT
from sensor.constant.training_pipeline import SAVED_MODEL_DIR
from sensor.exception import SensorException
from sensor.logger import logging
from sensor.ml.model.estimator import ModelResolver, TargetValueMapping
from sensor.pipeline import training_pipeline
from sensor.pipeline.training_pipeline import TrainPipeline
from sensor.utils.main_utils import load_object, read_yaml_file



def set_env_variable(env_file_path):

    if os.getenv('MONGO_DB_URL',None) is None:
        env_config = read_yaml_file(env_file_path)
        os.environ['MONGO_DB_URL']=env_config['MONGO_DB_URL']


app = FastAPI()
origins = ["*"]

app.add_middleware(CORSMiddleware, allow_origins=origins, allow_credentials=True, 
                   allow_methods=["*"], allow_headers=["*"],)


@app.get("/", tags=["authentication"])
async def index():
    return RedirectResponse(url="/docs")


@app.get("/train")
async def train_route():
    try:

        train_pipeline = TrainPipeline()
        if train_pipeline.is_pipeline_running:
            return Response("Training pipeline is already running.")
        train_pipeline.run_pipeline()
        return Response("Training successful!!")
    except Exception as e:
        return Response(f"Error Occurred! {e}")



if __name__=="__main__":
    app_run(app, host=APP_HOST, port=APP_PORT)