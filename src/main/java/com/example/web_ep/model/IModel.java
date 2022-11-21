package com.example.web_ep.model;

import com.example.web_ep.model.ObjectData.User;
import com.example.web_ep.model.ObjectData.Application;

import java.util.ArrayList;

public interface IModel {
    boolean AuthUser(User user);
    boolean CheckUser(User user);
    void RegUser(User user);
    void InsertApl(Application application, String login);
    ArrayList<Application> GetApl(String login);
    void DeleteApl(String delete);
}