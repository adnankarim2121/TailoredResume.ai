from django.shortcuts import render
import openai 
from django.views.decorators.csrf import csrf_exempt
import json
from django.http import JsonResponse
import os 
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()  
openai.api_key = os.getenv('OPENAI_API_KEY')

def ask_open_ai(CV, JD):
    prompt = "Given my CV: " + f"{CV} and the job description:" + f"{JD} \n" + "Write me a 1 page resume that is most relevant to the job in markdown format." 
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",  # Ensure you're using the correct model name
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": prompt}
        ]
    )

    # Accessing the response according to the updated structure
    reply = response['choices'][0]['message']['content']
    # Open the file for writing ('w' mode)
    # with open('sample_entry.txt', 'w') as file:
    #     # Write the string to the file
    #     file.write(reply)
    return reply

@csrf_exempt
def generate_new_resume(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        userCV = data.get('CV')
        userJD = data.get('JD')
        response = ask_open_ai(userCV, userJD)
        response_data = {'output': response}
        return JsonResponse(response_data)