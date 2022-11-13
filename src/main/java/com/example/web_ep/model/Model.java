package com.example.web_ep.model;

import com.example.web_ep.DB.DateBaseFactory;
import com.example.web_ep.DB.IDateBaseHandler;
import com.example.web_ep.model.ObjectData.*;

import java.util.ArrayList;

public class Model implements IModel {

    private final IDateBaseHandler db = DateBaseFactory.CreateDB();
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
    public Table GetApl(String login){
        Table table = new Table();
        ArrayList<ArrayList<String>> arr = db.GetApplication(db.GetId(login));
        table.setArr(arr);
        return table;
    }
    @Override
    public void DeleteApl(String delete){
        String[] a = delete.split(" ");

        for (String strings : a) {
            db.DeleteApplication(strings);
        }
    }
}