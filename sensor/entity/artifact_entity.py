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
