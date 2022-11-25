package Pack.model;

import Pack.model.API.In.IModel;
import Pack.model.API.ObjectData.Application;
import Pack.model.API.ObjectData.User;
import Pack.model.API.Out.IRepApplications;
import Pack.model.API.Out.IRepUsers;

import java.util.ArrayList;

public class Model implements IModel {
    IRepUsers dbU;
    IRepApplications dbA;
    @Override
    public void injectRepUsers(IRepUsers dbU) {
        this.dbU = dbU;
    }
    @Override
    public void injectRepApplications(IRepApplications dbA) {
        this.dbA = dbA;
    }
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