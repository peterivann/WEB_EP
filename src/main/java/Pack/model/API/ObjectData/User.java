package Pack.model.API.ObjectData;

public class User
{
    private int id;
    private String login;
    private String pass;
    private int hash;
    private String role;
    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPass() {
        return pass;
    }

    public void setPass(String pass) {
        this.pass = pass;
    }

    public int getHash() {
        return hash;
    }

    public void setHash(int hash) {
        this.hash = hash;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getRole() {return role;}

    public void setRole(String role) {this.role = role;}
}