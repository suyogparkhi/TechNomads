# Plant Disease Classification Web Application

## Project Overview

This project is a web-based application that classifies plant leaf images into various disease categories or identifies them as healthy. The system consists of two main parts:

- **Machine Learning Model:** A convolutional neural network (CNN) model trained to classify plant leaf images into multiple disease categories or healthy status. The model is integrated into the FastAPI backend.
- **Web-Based Application:** The frontend is built using React and communicates with the FastAPI backend, which processes images, runs the classification model, and returns predictions.

## Tech Stack

- **Backend:** FastAPI (Python), TensorFlow (for loading the pre-trained model)
- **Frontend:** React (JavaScript)
- **Machine Learning:** CNN Model using TensorFlow/Keras for plant disease classification.

## Project Setup

### Prerequisites

- Python 3.x installed
- Node.js and npm installed
- TensorFlow installed in the Python environment
- FastAPI and Uvicorn installed for the backend
- React environment set up for the frontend

---

## Backend: FastAPI Server Setup

### Step 1: Clone the repository

```bash
git clone <your-repository-url>
cd <repository-folder>
```

### Step 2: Install Python Dependencies

Ensure you have `tensorflow`, `fastapi`, `uvicorn`, `pillow`, and `numpy` installed in your environment.

```bash
pip install fastapi uvicorn pillow numpy tensorflow
```

### Step 3: Start the FastAPI Server

Ensure the model file is in the `../model/model.keras` path, or modify the `MODEL` path in the script if needed.

Run the FastAPI server with Uvicorn:

```bash
uvicorn <your-fastapi-file>:app --reload
```

For example, if your FastAPI script is named `main.py`:

```bash
uvicorn main:app --reload
```

The FastAPI server will start at `http://localhost:8000`.

### Backend API Endpoints

- **GET `/ping`:** A simple health check to confirm the server is running.
- **POST `/predict`:** This endpoint accepts an image file, processes it using the model, and returns the predicted disease class and confidence score.

### Example cURL Request for Prediction

```bash
curl -X POST "http://localhost:8000/predict" -H "accept: application/json" -H "Content-Type: multipart/form-data" -F "file=@path_to_your_image.jpg"
```

---

## Frontend: React App Setup

### Step 1: Navigate to the React project folder

```bash
cd <your-react-app-folder>
```

### Step 2: Install Node.js Dependencies

Ensure that all required dependencies are installed by running:

```bash
npm install
```

### Step 3: Start the React Development Server

Run the following command to start the React app:

```bash
npm start
```

The React app will start at `http://localhost:3000`.

---

## Running the Application

### Step 1: Start the FastAPI Server

In one terminal, navigate to your backend folder and run:

```bash
uvicorn main:app --reload
```

### Step 2: Start the React App

In another terminal, navigate to your frontend folder and run:

```bash
npm start
```

### Step 3: Use the Application

- Open your browser and go to `http://localhost:3000`.
- Upload an image of a plant leaf, and the system will classify it into one of the predefined categories.

---

## Folder Structure

```plaintext
.
├── backend/
│   ├── main.py  # FastAPI server code
│   ├── model/
│   │   └── model.keras  # Pretrained TensorFlow model
│   └── requirements.txt  # Optional: list of dependencies for backend
├── frontend/
│   ├── public/
│   ├── src/
│   └── package.json  # React dependencies
└── README.md  # This file
```

---

## Key Features

- **Image Upload:** Users can upload plant leaf images for disease classification.
- **Real-Time Predictions:** The backend processes the image and returns predictions in real-time.
- **Frontend Integration:** The React app interacts with the FastAPI server via RESTful API calls.
  
---

## Model Information

- **Model:** A Convolutional Neural Network (CNN) trained to classify plant diseases.
- **Classes:** The model is trained to predict one of the following plant disease categories:
  - Tomato Early Blight
  - Tomato Bacterial Spot
  - Pepper Bell Healthy
  - Pepper Bell Bacterial Spot
  - Tomato Yellow Leaf Curl Virus
  - Spider Mites
  - Tomato Healthy
  - Tomato Target Spot
  - Potato Late Blight
  - Tomato Septoria Leaf Spot
  - Tomato Leaf Mold
  - Tomato Late Blight
  - Potato Early Blight
  - Tomato Mosaic Virus
  - Potato Healthy

---

## Troubleshooting

- **Error: "Model not found"**: Ensure the model path in the FastAPI code is correct and points to a valid `.keras` file.
- **CORS Issues:** If you're accessing the backend from a different domain or port, ensure your CORS settings in FastAPI allow the correct origins.

---

## License

This project is licensed under the MIT License.

---

Let me know if you need more details or additional functionality!