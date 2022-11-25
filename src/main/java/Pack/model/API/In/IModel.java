package Pack.model.API.In;

import Pack.model.API.ObjectData.Application;
import Pack.model.API.Out.IRepUsers;
import Pack.model.API.Out.IRepApplications;

import Pack.model.API.ObjectData.User;

import java.util.ArrayList;

public interface IModel {
    void injectRepUsers(IRepUsers dbU);
    void injectRepApplications(IRepApplications dbA);
    boolean AuthUser(User user);
    boolean CheckUser(User user);
    void RegUser(User user);
    void InsertApl(Application application, String login);
    ArrayList<Application> GetApl(String login);
    void DeleteApl(String delete);
}