package com.example.web_ep.model;

import com.example.web_ep.model.ObjectData.Table;
import com.example.web_ep.model.ObjectData.User;
import com.example.web_ep.model.ObjectData.Application;

public interface IModel {
    boolean AuthUser(User user);
    boolean CheckUser(User user);
    void RegUser(User user);
    void InsertApl(Application application, String login);
    Table GetApl(String login);
    void DeleteApl(String delete);
}