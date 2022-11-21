from sensor.configuration.mongo_db_connection import MongoDBClient
from sensor.pipeline import training_pipeline
from sensor.pipeline.training_pipeline import TrainPipeline

if __name__ == '__main__':
    t_p = TrainPipeline()
    t_p.run_pipeline()