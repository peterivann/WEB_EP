package com.example.web_ep.DB;

import java.util.ArrayList;

public interface IDateBaseHandler {
    public void signUpUser(String login, String password);
    public Boolean getUserRegistr(String login);
    public Boolean getUserAuth(String login, String password);
    public void InsertApplication(String id_user, Integer applic_poz, String applic_topic, String applic_contavt, String applic_comment);
    public String GetId(String login);
    public Integer GetPoz(String id_user);
    public void DeleteApplication(String id_application);
    public ArrayList<ArrayList<String>> GetApplication(String id_user);
}
