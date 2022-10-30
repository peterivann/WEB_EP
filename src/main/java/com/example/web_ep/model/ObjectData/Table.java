package com.example.web_ep.model.ObjectData;

import java.util.ArrayList;

public class Table implements ITable {
    private ArrayList<ArrayList<String>> arr;

    public ArrayList<ArrayList<String>> getArr() {
        return arr;
    }

    public void setArr(ArrayList<ArrayList<String>> arr) {
        this.arr = arr;
    }

}
