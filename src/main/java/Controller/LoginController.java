package Controller;

import LoginRequest.LoginRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")
public class LoginController {

    @PostMapping("login")
    public ResponseEntity<String> login(@RequestBody LoginRequest loginRequest) {
        // 로그인 로직 처리
        System.out.println("Received login data: " + loginRequest);

        // 일단 요청을 성공적으로 처리했다고 가정하고 응답합니다.
        return ResponseEntity.ok("Login successful!");
    }
}

