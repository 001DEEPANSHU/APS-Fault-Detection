from dataclasses import dataclass

@dataclass
class DataIngestionArtifact:    # For Stage 1: Data Ingestion
    trained_file_path: str
    test_file_path: str

@dataclass
class DataValidationArtifact:   # For Stage 2: Data Validation
    validation_status: bool
    valid_train_file_path: str
    valid_test_file_path: str
    invalid_train_file_path: str
    invalid_test_file_path: str
    drift_report_file_path: str


@dataclass
class DataTransformationArtifact:   # For Stage 3: Data Transformation
    transformed_object_file_path: str
    transformed_train_file_path: str
    transformed_test_file_path: str


@dataclass
class ClassificationMetricArtifact:   # For Stage 4: Model Trainer
    f1_score: float
    precision_score: float
    recall_score: float

@dataclass
class ModelTrainerArtifact:         # For Stage 4: Model Trainer
    trained_model_file_path: str
    train_metric_artifact: ClassificationMetricArtifact
    test_metric_artifact: ClassificationMetricArtifact




