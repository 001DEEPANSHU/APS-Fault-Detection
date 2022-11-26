==========================
**Practical Demo**
==========================

This section contains the practical demo of the project.
The model is served as an API using FastAPI as shown below:


.. image:: ../project_workflow/Practical_Demo/0_App_home.png
   :width: 500

---------------------------
**Training Route**
---------------------------

.. image:: ../project_workflow/Practical_Demo/1_Training_Starts.png
   :width: 500

.. image:: ../project_workflow/Practical_Demo/2_Training_Response.png
   :width: 500

The trained model is saved at a predefined directory:

.. image:: ../project_workflow/Practical_Demo/4_Saved_Model.png
    :width: 500

If a newly trained model is not better than the saved best trained model:

.. image:: ../project_workflow/Practical_Demo/3_Trained_model_is_best.png
    :width: 500



---------------------------
**Prediction Route**
---------------------------

For demo purpose, I have saved data(having 1000 rows) for prediction in the source code repository which can be found at `data_for_prediction/1000_rows_for_prediction.csv`.

.. image:: ../project_workflow/Practical_Demo/5_Data_for_prediction.png
   :width: 500

Here, we have an option to upload a data file for prediction which will return us the data file along with the predicted classes column

.. image:: ../project_workflow/Practical_Demo/6_Predict_Route.png
   :width: 500


After the predictions are made, we can download the data file along with the prediction column

.. image:: ../project_workflow/Practical_Demo/7_Prediction_Response.png
   :width: 500


 