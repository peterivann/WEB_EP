package com.example.web_ep.DB;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

import java.sql.ResultSet;
import java.util.ArrayList;

public class DatabaseHandler extends Configs {
    private static Connection dbConnection;

    public static Connection getDbConnection() {
        String connectionString = "jdbc:mysql://" + dbHost + ":" + dbPort + "/" + dbName + "?useSSL=false";
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            dbConnection = DriverManager.getConnection(connectionString, dbUser, dbPass);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return dbConnection;
    }

    public static void closeConnection() {
        if (dbConnection != null) {
            try {
                dbConnection.close();
            } catch (Exception ignored) {
            }
        }
    }

    public static void signUpUser(String login, String password){
        String insert = "INSERT INTO " + Const.USER_TABLE + "(" +
                Const.USER_LOGIN + "," + Const.USER_PASSWORD + ")" +
                "VALUES(?,?)";
        try {
            PreparedStatement prSt = getDbConnection().prepareStatement(insert);
            prSt.setString(1, login);
            prSt.setString(2, password);
            prSt.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }
        closeConnection();
    }

    public static Boolean getUser(String login, String password) {
        ResultSet resSet;

        String select = "SELECT * FROM " + Const.USER_TABLE + " WHERE " +
                Const.USER_LOGIN + "=? AND " + Const.USER_PASSWORD + "=?";

        try {
            PreparedStatement prSt = getDbConnection().prepareStatement(select);
            prSt.setString(1, login);
            prSt.setString(2, password);
            resSet = prSt.executeQuery();
            if (resSet.next()) {
                closeConnection();
                return true;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        closeConnection();
        return false;
    }

    public static void InsertApplication(String id_user, Integer applic_poz, String applic_topic, String applic_contavt, String applic_comment) {
        String insert = "INSERT INTO " + Const.USER_APPLIC_TABLE + "(" +
                Const.USER_APPLIC_ID_USER + "," + Const.USER_APPLIC_POZ + "," + Const.USER_APPLIC_TOPIC + "," + Const.USER_APPLIC_CONTACT + "," + Const.USER_APPLIC_COMMENT + ")" +
                "VALUES(?,?,?,?,?)";

        try {
            PreparedStatement prSt = getDbConnection().prepareStatement(insert);
            prSt.setString(1, id_user);
            prSt.setString(2, String.valueOf(applic_poz));
            prSt.setString(3, applic_topic);
            prSt.setString(4, applic_contavt);
            prSt.setString(5, applic_comment);
            prSt.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }
        closeConnection();
    }

    public static String GetId(String login, String password) {

        ResultSet resSet = null;
        String id = "";

        String select = "SELECT " + Const.USER_ID + " FROM " + Const.USER_TABLE + " WHERE " +
                Const.USER_LOGIN + "=? AND " + Const.USER_PASSWORD + "=?";
        try {
            PreparedStatement prSt = getDbConnection().prepareStatement(select);
            prSt.setString(1, login);
            prSt.setString(2, password);
            resSet = prSt.executeQuery();
            while (resSet.next()) {
                id = resSet.getString(Const.USER_ID);
            }
            closeConnection();
            return id;
        } catch (Exception e) {
            e.printStackTrace();
        }
        closeConnection();
        return id;
    }

    public static Integer GetPoz(String id_user) {

        ResultSet resSet = null;
        int n = 1;
        String select = "SELECT " + Const.USER_APPLIC_POZ + " FROM " + Const.USER_APPLIC_TABLE + " WHERE " +
                Const.USER_APPLIC_ID_USER + "=?";

        try {
            PreparedStatement prSt = getDbConnection().prepareStatement(select);
            prSt.setString(1, id_user);
            resSet = prSt.executeQuery();
            while (resSet.next()) {
                n = n + 1;
            }
            prSt.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }
        closeConnection();
        return n;
    }

    public static void DeleteApplication(String id_application) {

        String delete = "DELETE FROM " + Const.USER_APPLIC_TABLE + " WHERE " +
                Const.USER_APPLIC_ID + "=?";
        try {
            PreparedStatement prSt = getDbConnection().prepareStatement(delete);
            prSt.setString(1, id_application);
            prSt.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }
        closeConnection();
    }

    public static ArrayList<ArrayList<String>> GetApplication(String id_user) {

        ResultSet resSet = null;

        String select = "(SELECT " + Const.USER_APPLIC_ID + ", " + Const.USER_APPLIC_TOPIC + ", " + Const.USER_APPLIC_CONTACT + ", " + Const.USER_APPLIC_COMMENT + " FROM " + Const.USER_APPLIC_TABLE + " WHERE " +
                Const.USER_APPLIC_ID_USER + "=?)";
        ArrayList<ArrayList<String>> products = new ArrayList<>();
        try {
            PreparedStatement prSt = getDbConnection().prepareStatement(select);
            prSt.setString(1, id_user);
            resSet = prSt.executeQuery();
            while (resSet.next()) {
                ArrayList<String> productArr = new ArrayList<String>();
                productArr.add(resSet.getString(Const.USER_APPLIC_ID));
                productArr.add(resSet.getString(Const.USER_APPLIC_TOPIC));
                productArr.add(resSet.getString(Const.USER_APPLIC_CONTACT));
                productArr.add(resSet.getString(Const.USER_APPLIC_COMMENT));
                products.add(productArr);
            }
            closeConnection();
            return products;
        } catch (Exception e) {
            e.printStackTrace();
        }
        closeConnection();
        return products;
    }
}
