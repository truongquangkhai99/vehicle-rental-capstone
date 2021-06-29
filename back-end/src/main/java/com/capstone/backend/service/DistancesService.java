package com.capstone.backend.service;

import java.io.IOException;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

@Service
public class DistancesService {
    private static final String API_KEY="AIzaSyCpxahQv_3J_M7PdT0JgRg3J1RyXXG4GIw";
    OkHttpClient client = new OkHttpClient();


public String calculate(String source ,String destination) throws IOException {
String url="https://maps.googleapis.com/maps/api/distancematrix/json?origins="+source+"&destinations="+destination+"&key="+ API_KEY;
            Request request = new Request.Builder()
                .url(url)
                .build();   

            Response response = client.newCall(request).execute();
            return response.body().string();
          }

}