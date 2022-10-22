package com.example.web_ep.model;

import com.example.web_ep.DB.DateBaseFactory;
import com.example.web_ep.DB.IDateBaseHandler;
import com.example.web_ep.ObjectData.User;
import com.example.web_ep.ObjectData.Application;
import com.example.web_ep.ObjectData.Delete;
import com.example.web_ep.ObjectData.Table;

import java.util.ArrayList;

public class Model implements IModel {

    private IDateBaseHandler db = DateBaseFactory.CreateDB();
    @Override
    public boolean AuthUser(User user){
        return db.getUserAuth(user.getLogin(), user.getPass());
    }
    @Override
    public boolean CheckUser(User user){
        return db.getUserRegistr(user.getLogin());
    }
    @Override
    public void RegUser(User user){
        db.signUpUser(user.getLogin(), user.getPass());
    }
    @Override
    public void InsertApl(Application application, String login){
        db.InsertApplication(db.GetId(login), db.GetPoz(db.GetId(login)), application.getTopic(), application.getContact(), application.getComment());
    }
    @Override
    public void GetApl(Table table ,String login){
        ArrayList<ArrayList<String>> arr = db.GetApplication(db.GetId(login));
        table.setArr(arr);
    }
    @Override
    public void  DeleteApl(Delete delete){
        for (String strings : delete.getElement()) {
            db.DeleteApplication(strings);
        }
    }
}