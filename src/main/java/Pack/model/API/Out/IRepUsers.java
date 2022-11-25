package Pack.model.API.Out;

public interface IRepUsers {
    public void signUpUser(String login, String password);
    public Boolean getUserRegistr(String login);
    public Boolean getUserAuth(String login, String password);
    public Integer GetId(String login);
}
