package LoginRequest;

public class LoginRequest {
    private String id;
    private String password;

    // Getters and Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    @Override
    public String toString() {
        return "LoginRequest{" +
                "id='" + id + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
