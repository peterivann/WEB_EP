package com.example.web_ep.model;

import com.example.web_ep.DB.IRepApplications;
import com.example.web_ep.DB.IRepUsers;
import com.example.web_ep.model.ObjectData.*;
import jakarta.inject.Inject;

import java.util.ArrayList;

public class Model implements IModel {
    @Inject
    private IRepUsers dbU;
    @Inject
    private IRepApplications dbA;
    @Override
    public boolean AuthUser(User user){
        return dbU.getUserAuth(user.getLogin(), user.getPass());
    }
    @Override
    public boolean CheckUser(User user){
        return dbU.getUserRegistr(user.getLogin());
    }
    @Override
    public void RegUser(User user){
        dbU.signUpUser(user.getLogin(), user.getPass());
    }
    @Override
    public void InsertApl(Application application, String login){
        dbA.InsertApplication(dbU.GetId(login), dbA.GetPoz(dbU.GetId(login)), application.getTopic(), application.getContact(), application.getComment());
    }
    @Override
    public ArrayList<Application> GetApl(String login){
        return dbA.GetApplication(dbU.GetId(login));
    }
    @Override
    public void DeleteApl(String delete){
        String[] a = delete.split(" ");
        for (String strings : a) {
            dbA.DeleteApplication(Integer.parseInt(strings));
        }
    }
}