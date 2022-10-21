package com.example.web_ep.ObjectData;

import java.util.ArrayList;

public class Table {
    private ArrayList<ArrayList<String>> arr;
    private String login_user;
    private String pass_user;

    public ArrayList<ArrayList<String>> getArr() {
        return arr;
    }

    public void setArr(ArrayList<ArrayList<String>> arr) {
        this.arr = arr;
    }

    public String getLogin_user() {
        return login_user;
    }

    public void setLogin_user(String login_user) {
        this.login_user = login_user;
    }

    public String getPass_user() {
        return pass_user;
    }

    public void setPass_user(String pass_user) {
        this.pass_user = pass_user;
    }
}
