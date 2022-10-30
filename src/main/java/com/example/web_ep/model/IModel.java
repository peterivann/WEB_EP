package com.example.web_ep.model;

import com.example.web_ep.model.ObjectData.User;
import com.example.web_ep.model.ObjectData.Application;
import com.example.web_ep.model.ObjectData.ITable;

public interface IModel {
    boolean AuthUser(User user);
    boolean CheckUser(User user);
    void RegUser(User user);
    void InsertApl(Application application, String login);
    void GetApl(ITable table, String login);
    void DeleteApl(String delete);
}