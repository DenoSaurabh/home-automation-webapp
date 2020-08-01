This project was of Self Driving Car WebApp with [Create React App](https://github.com/facebook/create-react-app).

This online Sample of this webapp is https://self-driving-car-webapp.netlify.com/

# Introduction

Self Driving Car are becaming polular nowdays. So I tried to make a self driving car with RaspberryPI 4 b Model. The ML and AI in the car about lanes detection, traffic light detection and more can be found on by brother Self Driving Car repo https://github.com/Shubham2004-AI/self-driving-car.

After this I decided to add more functionalities to Car such that it can be also conreolles with Web. So that's the whole Self Driving Car Webapp.

# Tech's Used

To make this Self Driving Car I used tech like React for building Webapp. The Socket.io is the main thing I used for Data transmission between Web and Car.

# How the Data Transmission Occur.

The main Artitecture I used for Data Transmission is Client-Server-Client. Let Break it down. The data transmission artitecture is WebApp-MainServer-Car.

It is something like MQTT Publisher-Subscriber Artiecture. Where the MainServer acts like Broker and the Clients Subscribe and Publish Data (Server also can be). In this >
1. the Car Publish the data to Server 
2. and then Server who has subsScribe to that event gets data
3. Then the Server send data to Car (Move forward, backward, etc..)
4. Then the Car who has subscribe to that Event take action with Data  (Move forward, backward, etc..)

Same, this the Car can send data to Web

( Actually I have not readen a lot about MQTT Protocol and Artitecture, but I have taken an Idea about That)
