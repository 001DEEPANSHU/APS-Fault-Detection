Search.setIndex({docnames:["articles/ML_Approach","articles/ML_Pipeline","articles/demo","articles/project_overview","index","modules","sensor","sensor.cloud_storage","sensor.components","sensor.configuration","sensor.constant","sensor.constant.training_pipeline","sensor.data_access","sensor.entity","sensor.ml","sensor.ml.metric","sensor.ml.model","sensor.pipeline","sensor.utils"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":5,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["articles/ML_Approach.rst","articles/ML_Pipeline.rst","articles/demo.rst","articles/project_overview.rst","index.rst","modules.rst","sensor.rst","sensor.cloud_storage.rst","sensor.components.rst","sensor.configuration.rst","sensor.constant.rst","sensor.constant.training_pipeline.rst","sensor.data_access.rst","sensor.entity.rst","sensor.ml.rst","sensor.ml.metric.rst","sensor.ml.model.rst","sensor.pipeline.rst","sensor.utils.rst"],objects:{"":[[6,0,0,"-","sensor"]],"sensor.components":[[8,0,0,"-","data_ingestion"],[8,0,0,"-","data_transformation"],[8,0,0,"-","data_validation"],[8,0,0,"-","model_evaluation"],[8,0,0,"-","model_pusher"],[8,0,0,"-","model_trainer"]],"sensor.components.data_ingestion":[[8,1,1,"","DataIngestion"]],"sensor.components.data_ingestion.DataIngestion":[[8,2,1,"","export_data_into_feature_store"],[8,2,1,"","initiate_data_ingestion"],[8,2,1,"","split_data_as_train_test"]],"sensor.components.data_transformation":[[8,1,1,"","DataTransformation"]],"sensor.components.data_transformation.DataTransformation":[[8,2,1,"","get_data_transformer_object"],[8,2,1,"","initiate_data_transformation"],[8,2,1,"","read_data"]],"sensor.components.data_validation":[[8,1,1,"","DataValidation"]],"sensor.components.data_validation.DataValidation":[[8,2,1,"","detect_dataset_drift"],[8,2,1,"","initiate_data_validation"],[8,2,1,"","is_numerical_column_exist"],[8,2,1,"","read_data"],[8,2,1,"","validate_number_of_columns"]],"sensor.components.model_evaluation":[[8,1,1,"","ModelEvaluation"]],"sensor.components.model_evaluation.ModelEvaluation":[[8,2,1,"","initiate_model_evaluation"]],"sensor.components.model_pusher":[[8,1,1,"","ModelPusher"]],"sensor.components.model_pusher.ModelPusher":[[8,2,1,"","initiate_model_pusher"]],"sensor.components.model_trainer":[[8,1,1,"","ModelTrainer"]],"sensor.components.model_trainer.ModelTrainer":[[8,2,1,"","initiate_model_trainer"],[8,2,1,"","train_model"]],"sensor.configuration":[[9,0,0,"-","mongo_db_connection"]],"sensor.configuration.mongo_db_connection":[[9,1,1,"","MongoDBClient"]],"sensor.configuration.mongo_db_connection.MongoDBClient":[[9,3,1,"","client"]],"sensor.constant":[[10,0,0,"-","application"],[10,0,0,"-","database"],[10,0,0,"-","env_variable"],[10,0,0,"-","s3_bucket"],[11,0,0,"-","training_pipeline"]],"sensor.data_access":[[12,0,0,"-","sensor_data"]],"sensor.data_access.sensor_data":[[12,1,1,"","SensorData"]],"sensor.data_access.sensor_data.SensorData":[[12,2,1,"","export_collection_as_dataframe"],[12,2,1,"","save_csv_file"]],"sensor.entity":[[13,0,0,"-","artifact_entity"],[13,0,0,"-","config_entity"]],"sensor.entity.artifact_entity":[[13,1,1,"","ClassificationMetricArtifact"],[13,1,1,"","DataIngestionArtifact"],[13,1,1,"","DataTransformationArtifact"],[13,1,1,"","DataValidationArtifact"],[13,1,1,"","ModelEvaluationArtifact"],[13,1,1,"","ModelPusherArtifact"],[13,1,1,"","ModelTrainerArtifact"]],"sensor.entity.artifact_entity.ClassificationMetricArtifact":[[13,3,1,"","f1_score"],[13,3,1,"","precision_score"],[13,3,1,"","recall_score"]],"sensor.entity.artifact_entity.DataIngestionArtifact":[[13,3,1,"","test_file_path"],[13,3,1,"","trained_file_path"]],"sensor.entity.artifact_entity.DataTransformationArtifact":[[13,3,1,"","transformed_object_file_path"],[13,3,1,"","transformed_test_file_path"],[13,3,1,"","transformed_train_file_path"]],"sensor.entity.artifact_entity.DataValidationArtifact":[[13,3,1,"","drift_report_file_path"],[13,3,1,"","invalid_test_file_path"],[13,3,1,"","invalid_train_file_path"],[13,3,1,"","valid_test_file_path"],[13,3,1,"","valid_train_file_path"],[13,3,1,"","validation_status"]],"sensor.entity.artifact_entity.ModelEvaluationArtifact":[[13,3,1,"","best_model_metric_artifact"],[13,3,1,"","best_model_path"],[13,3,1,"","improved_accuracy"],[13,3,1,"","is_model_accepted"],[13,3,1,"","train_model_metric_artifact"],[13,3,1,"","trained_model_path"]],"sensor.entity.artifact_entity.ModelPusherArtifact":[[13,3,1,"","model_file_path"],[13,3,1,"","saved_model_path"]],"sensor.entity.artifact_entity.ModelTrainerArtifact":[[13,3,1,"","test_metric_artifact"],[13,3,1,"","train_metric_artifact"],[13,3,1,"","trained_model_file_path"]],"sensor.entity.config_entity":[[13,1,1,"","DataIngestionConfig"],[13,1,1,"","DataTransformationConfig"],[13,1,1,"","DataValidationConfig"],[13,1,1,"","ModelEvaluationConfig"],[13,1,1,"","ModelPusherConfig"],[13,1,1,"","ModelTrainerConfig"],[13,1,1,"","TrainingPipelineConfig"]],"sensor.exception":[[6,4,1,"","SensorException"],[6,5,1,"","error_message_detail"]],"sensor.ml":[[15,0,0,"-","metric"],[16,0,0,"-","model"]],"sensor.ml.metric":[[15,0,0,"-","classification_metric"]],"sensor.ml.metric.classification_metric":[[15,5,1,"","get_classification_score"]],"sensor.ml.model":[[16,0,0,"-","estimator"]],"sensor.ml.model.estimator":[[16,1,1,"","ModelResolver"],[16,1,1,"","SensorModel"],[16,1,1,"","TargetValueMapping"]],"sensor.ml.model.estimator.ModelResolver":[[16,2,1,"","get_best_model_path"],[16,2,1,"","is_model_exists"]],"sensor.ml.model.estimator.SensorModel":[[16,2,1,"","predict"]],"sensor.ml.model.estimator.TargetValueMapping":[[16,2,1,"","reverse_mapping"],[16,2,1,"","to_dict"]],"sensor.pipeline":[[17,0,0,"-","training_pipeline"]],"sensor.pipeline.training_pipeline":[[17,1,1,"","TrainPipeline"]],"sensor.pipeline.training_pipeline.TrainPipeline":[[17,3,1,"","is_pipeline_running"],[17,2,1,"","run_pipeline"],[17,2,1,"","start_data_ingestion"],[17,2,1,"","start_data_transformation"],[17,2,1,"","start_data_validaton"],[17,2,1,"","start_model_evaluation"],[17,2,1,"","start_model_pusher"],[17,2,1,"","start_model_trainer"]],"sensor.utils":[[18,0,0,"-","main_utils"]],"sensor.utils.main_utils":[[18,5,1,"","load_numpy_array_data"],[18,5,1,"","load_object"],[18,5,1,"","read_yaml_file"],[18,5,1,"","save_numpy_array_data"],[18,5,1,"","save_object"],[18,5,1,"","write_yaml_file"]],sensor:[[7,0,0,"-","cloud_storage"],[8,0,0,"-","components"],[9,0,0,"-","configuration"],[10,0,0,"-","constant"],[12,0,0,"-","data_access"],[13,0,0,"-","entity"],[6,0,0,"-","exception"],[6,0,0,"-","logger"],[14,0,0,"-","ml"],[17,0,0,"-","pipeline"],[18,0,0,"-","utils"]]},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","exception","Python exception"],"5":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:exception","5":"py:function"},terms:{"0":8,"05":8,"1":0,"10":0,"1000":2,"1000_rows_for_predict":2,"11":13,"18":13,"2":0,"2022":13,"22":13,"26":13,"27":13,"2950":0,"34150":0,"3510":0,"4460":0,"4950":0,"50":0,"500":0,"5760":0,"716517":13,"class":[0,2,8,9,12,13,16,17],"export":[8,12],"float":13,"function":0,"long":3,"return":[2,18],"static":8,"true":0,"while":0,A:3,For:2,If:2,In:[0,3],One:3,The:[0,1,2,3],There:0,abov:0,accur:3,after:2,aim:0,air:[0,3],all:[0,3],along:2,among:3,an:[0,2,3],ap:[0,3],api:2,applic:[5,6],approach:4,aps_db:9,ar:[0,2],arrai:18,artifact_ent:[5,6,8,15,17],attribut:3,base:[3,6,8,9,12,13,16,17],base_df:8,been:0,below:[1,2],best:[0,2],best_model_metric_artifact:13,best_model_path:13,better:2,binari:0,bool:[8,13,16,18],brake:[0,3],breakdown:0,built:6,can:[0,2,3,4],carri:0,catboostclassifi:0,caus:0,chang:0,check:[3,4],checkup:0,classif:0,classification_metr:[6,14],classificationmetricartifact:[13,15],classmethod:8,client:9,cloud_storag:[5,6],code:[1,2,4],collect:8,collection_nam:12,column:2,combin:0,compani:3,compon:[0,1,3,5,6],compress:3,config_ent:[5,6,8],configur:[5,6],connect:3,consist:1,constant:[0,5,6],contain:2,content:5,core:[8,12],correspond:0,cost:3,cost_1:0,cost_2:0,could:0,crucial:3,csv:2,current_df:8,cut:3,data:[2,3,8,18],data_access:[5,6],data_for_predict:2,data_ingest:[5,6],data_ingestion_artifact:[8,17],data_ingestion_config:8,data_transform:[5,6],data_transformation_artifact:[8,17],data_transformation_config:8,data_valid:[5,6],data_validation_artifact:[8,17],data_validation_config:8,databas:[5,6],database_nam:[9,12],datafram:[8,12],dataingest:8,dataingestionartifact:[8,13,17],dataingestionconfig:[8,13],dataset:[0,8],datatransform:8,datatransformationartifact:[8,13,17],datatransformationconfig:[8,13],datavalid:8,datavalidationartifact:[8,13,17],datavalidationconfig:[8,13],datetim:13,db:[8,12],demo:4,denot:0,deploi:0,detect_dataset_drift:8,determin:0,develop:0,dict:18,differ:0,directori:2,down:3,download:2,drift_report_file_path:13,due:0,duti:3,eas:3,effort:3,either:0,entir:12,entiti:[5,6,8,15,17],env_vari:[5,6],equal:0,error:6,error_detail:6,error_messag:6,error_message_detail:6,essenc:3,estim:[6,14],except:5,expens:0,experi:0,export_collection_as_datafram:12,export_data_into_feature_stor:8,extra:3,f1_score:13,factor:0,fail:0,failur:[0,3],fals:[0,17,18],fastapi:2,featur:8,file:[2,8,18],file_path:[8,12,18],fleet:3,flow:1,focu:0,follow:[0,1],forest:0,found:2,frame:[8,12],from:[0,18],gear:0,gener:0,get_best_model_path:16,get_classification_scor:15,get_data_transformer_object:8,github:4,give:0,given:[0,1],goal:3,ha:[0,3],have:[0,2],heavi:3,here:[2,4],high:1,higher:0,highli:0,hydraul:3,i:2,imbalanc:0,importantli:0,improved_accuraci:13,imput:0,incur:0,index:[3,4],inform:4,initiate_data_ingest:8,initiate_data_transform:8,initiate_data_valid:8,initiate_model_evalu:8,initiate_model_push:8,initiate_model_train:8,inspect:0,instanc:0,interest:3,invalid_test_file_path:13,invalid_train_file_path:13,is_model_accept:13,is_model_exist:16,is_numerical_column_exist:8,is_pipeline_run:17,knn:0,lead:3,learn:[3,4],level:1,load:18,load_numpy_array_data:18,load_object:18,locat:18,logger:5,machin:4,made:2,main_util:[5,6],make:[0,3],malfunct:0,manufactur:3,mean:0,measur:3,mechan:[0,3],median:0,method:0,metric:[6,14],mice:0,minim:0,miss:0,ml:[0,5,6],model:[0,2,6,14],model_dir:16,model_eval_artifact:[8,17],model_eval_config:8,model_evalu:[5,6],model_file_path:13,model_push:[5,6],model_pusher_config:8,model_train:[5,6],model_trainer_artifact:[8,17],model_trainer_config:8,modelevalu:8,modelevaluationartifact:[8,13,17],modelevaluationconfig:[8,13],modelpush:8,modelpusherartifact:[8,13],modelpusherconfig:[8,13],modelresolv:16,modeltrain:8,modeltrainerartifact:[8,13,17],modeltrainerconfig:[8,13],modul:[3,4,5],mongo:[8,12],mongo_db_connect:[5,6],mongodbcli:9,more:0,natur:3,neg:0,newli:2,no_inst:0,none:[8,9,12,18],notic:0,np:18,number:0,numpi:18,obj:18,object:[8,9,12,13,16,17,18],observ:0,obtain:3,oper:3,option:[2,12],other:3,out:[0,4],overal:0,overview:4,packag:[4,5],pad:3,page:[3,4],panda:[8,12],part:3,particularli:3,pca:0,perform:0,pipelin:[4,5,6,8],piston:3,pointless:3,posit:0,practic:4,precision_scor:13,predefin:2,predict:[0,3,16],prefer:3,preprocessor:16,pressur:[0,3],problem:0,project:[2,4],provid:3,purpos:2,push:3,random:0,read_data:8,read_yaml_fil:18,recall_scor:13,record:[8,12],reduc:[0,3],refer:0,regard:3,relat:0,repair:0,replac:18,repositori:[2,4],requir:[0,3],respons:0,result:0,reverse_map:16,row:2,run_pipelin:17,s3_bucket:[5,6],s:[0,3],save:[2,18],save_csv_fil:12,save_numpy_array_data:18,save_object:18,saved_model:16,saved_model_path:13,scania:3,search:[3,4],section:[2,4],sensor:4,sensor_data:[5,6],sensordata:12,sensorexcept:6,sensormodel:16,serv:2,shown:2,significantli:3,simpl:0,sinc:0,sklearn:8,slow:3,so:0,sourc:[2,4,6,8,9,12,13,15,16,17,18],specif:0,split:8,split_data_as_train_test:8,start_data_ingest:17,start_data_transform:17,start_data_validaton:17,start_model_evalu:17,start_model_push:17,start_model_train:17,statement:0,statu:3,store:8,str:[12,13,16,18],strategi:0,submodul:[5,14],subpackag:5,sum:0,summari:0,sustain:3,sy:6,system:[0,3],tabl:0,target:0,targetvaluemap:16,term:3,test:8,test_file_path:13,test_metric_artifact:13,than:[0,2],thi:[0,2,4],threshold:8,time:[0,3],timestamp:13,to_dict:16,total:0,total_cost:0,train:[1,8],train_metric_artifact:13,train_model:8,train_model_metric_artifact:13,trained_file_path:13,trained_model_file_path:13,trained_model_path:13,training_pipelin:[5,6,10],training_pipeline_config:13,trainingpipelineconfig:13,trainpipelin:17,transformed_object_file_path:13,transformed_test_file_path:13,transformed_train_file_path:13,truck:[0,3],type:0,unnecessari:0,upload:2,us:[2,3],util:[0,5,6],valid_test_file_path:13,valid_train_file_path:13,validate_number_of_column:8,validation_statu:13,valu:0,variou:0,vehicl:3,visit:4,wa:0,we:[0,2],were:0,whether:0,which:[0,2],workshop:0,write_yaml_fil:18,x:16,x_train:8,xgbclassifi:0,y_pred:15,y_train:8,y_true:15,you:4},titles:["Machine Learning Approach","Machine Learning Pipeline","<strong>Practical Demo</strong>","<strong>Project Overview</strong>","Welcome to APS(Air Pressure System) Fault Detection\u2019s documentation!","<strong>sensor</strong>","sensor package","sensor.cloud_storage package","sensor.components package","sensor.configuration package","sensor.constant package","sensor.constant.training_pipeline package","sensor.data_access package","sensor.entity package","sensor.ml package","sensor.ml.metric package","sensor.ml.model package","sensor.pipeline package","sensor.utils package"],titleterms:{"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,air:4,ap:4,applic:10,approach:0,artifact_ent:13,busi:3,calcul:0,classification_metr:15,cloud_storag:7,compon:8,config_ent:13,configur:9,constant:[10,11],content:[4,6,7,8,9,10,11,12,13,14,15,16,17,18],cost:0,data:1,data_access:12,data_ingest:8,data_transform:8,data_valid:8,databas:10,demo:2,detect:4,document:4,eda:0,entiti:13,env_vari:10,estim:16,evalu:1,except:6,fault:4,find:0,indic:3,ingest:1,introduct:3,learn:[0,1],logger:6,machin:[0,1],main_util:18,metric:15,ml:[14,15,16],model:[1,16],model_evalu:8,model_push:8,model_train:8,modul:[6,7,8,9,10,11,12,13,14,15,16,17,18],mongo_db_connect:9,overview:3,packag:[6,7,8,9,10,11,12,13,14,15,16,17,18],pipelin:[1,17],practic:2,predict:2,pressur:4,problem:3,project:3,pusher:1,rout:2,s3_bucket:10,s:4,sensor:[5,6,7,8,9,10,11,12,13,14,15,16,17,18],sensor_data:12,stage:1,submodul:[6,8,9,10,12,13,15,16,17,18],subpackag:[6,10,14],system:4,tabl:[3,4],train:2,trainer:1,training_pipelin:[11,17],transform:1,util:18,valid:1,welcom:4}})