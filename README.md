# Golden Owl Asia Test - G-Scores
# API Documentation

## 1. Test Server
### Hello World Endpoint
**Endpoint:** `GET /`

**Description:**
Returns a simple hello world message to test if the server is running.

**Response:**
```json
{
    "code": 200,
    "message": "Hello World"
}
```

---

## 2. Score Management
### Check Score
**Endpoint:** `POST /check-score/:number`

**Description:**
Retrieves the score of a student based on their registration number.

**Request Parameters:**
- `number` (string): The registration number of the student.

**Response:**
- **Success:**
  ```json
  {
      "code": 200,
      "score": {
        "number": "26020938",
        "math": 9.6,
        "literature": 8,
        "foreignLanguage": 9.6,
        "physics": 10,
        "chemistry": 10,
        "biology": 8.75,
        "history": null,
        "geography": null,
        "civicEducation": null,
        "foreignLanguageId": "N1\r"
      }
  }
  ```
- **Error (Invalid Number):**
  ```json
  {
      "code": 404,
      "message": "12345678 is invalid number registration"
  }
  ```

---

### Get Statistics by Subject
**Endpoint:** `POST /statistics/:subject`

**Description:**
Returns statistical data for a specified subject.

**Request Parameters:**
- `subject` (string): The subject for which statistics are required. Must be one of:
  `math`, `literature`, `foreignLanguage`, `physics`, `chemistry`, `biology`, `history`, `geography`, `civicEducation`

**Response:**
- **Success:**
  ```json
  {
      "code": 200,
      "statistics": [
          { "type": "Bad", "Quantity": 10 },
          { "type": "Medium", "Quantity": 25 },
          { "type": "Good", "Quantity": 40 },
          { "type": "Excellent", "Quantity": 15 }
      ],
      "subject": "math"
  }
  ```
- **Error (Invalid Subject):**
  ```json
  {
      "code": 400,
      "message": "invalidSubject is invalid subject, subject must be in (math, literature, foreignLanguage, physics, chemistry, biology, history, geography, civicEducation)"
  }
  ```

---

### Get Top Students
**Endpoint:** `GET /top-students`

**Description:**
Returns the top 10 students based on the total score of three subjects: math, physics, and chemistry.

**Response:**
```json
{
    "code": 200,
    "topStudents": [
        {
            "number": "12345",
            "math": 9.0,
            "physics": 8.8,
            "chemistry": 8.5,
            "total_score": 26.3
        },
        {
            "number": "67890",
            "math": 8.5,
            "physics": 8.0,
            "chemistry": 8.2,
            "total_score": 24.7
        }
    ]
}
```
# Run the application with Docker
## 1. Start the Application
```sh
docker-compose up --build
```

## 2. Stop and Remove Containers
```sh
docker-compose down
```

## 3. View Logs
```sh
docker-compose logs -f
```

## 4. Restart the Application
```sh
docker-compose restart
```

# Deployment
- **Backend:** [https://golden-owl-asia-test.onrender.com/](https://golden-owl-asia-test.onrender.com/)
- **Frontend:** [https://golden-owl-asia-test.vercel.app/](https://golden-owl-asia-test.vercel.app/)

📌 *Note:* It takes about **1 minute** for the backend server to fully start when accessed for the first time.