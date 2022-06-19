import busio
import requests
import board
import adafruit_am2320
import time
import RPi.GPIO as GPIO

moistureSensor = 26
GPIO.setmode(GPIO.BCM)
GPIO.setup(moistureSensor, GPIO.IN)
led = 18
GPIO.setup(led, GPIO.OUT)

# create the I2C shared bus which uses board.SCL and board.SDA
i2c = board.I2C()
sensor = adafruit_am2320.AM2320(i2c)

#function to connect raspberry pi server and to post readings
def post_log(soil_moisture, humidity, temperature):
    r = requests.post('http://DESKTOP-S8JQFE3:3000/api/readings', json={'Temperature': temperature, 'Humidity': humidity,"SoilMoisture" : soil_moisture, 'Time': time.asctime()})
    print(r)


while True:
    SoilMoisture = GPIO.input(moistureSensor)
    print('Humidity: {0}%'.format(sensor.relative_humidity))
    print('Temperature: {0}C'.format(sensor.temperature))
    print("Moisture warning: " + time.asctime())
    print(SoilMoisture)
    post_log(SoilMoisture,sensor.relative_humidity, sensor.temperature)
    GPIO.output(led, 1) # where 1 means dry
    time.sleep(1)

