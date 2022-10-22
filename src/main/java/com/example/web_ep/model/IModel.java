package com.example.web_ep.model;

import com.example.web_ep.ObjectData.User;
import com.example.web_ep.ObjectData.Application;
import com.example.web_ep.ObjectData.Delete;
import com.example.web_ep.ObjectData.Table;

public interface IModel {
    boolean AuthUser(User user);
    boolean CheckUser(User user);
    void RegUser(User user);
    void InsertApl(Application application, String login);
    void GetApl(Table table, String login);
    void DeleteApl(Delete delete);
}