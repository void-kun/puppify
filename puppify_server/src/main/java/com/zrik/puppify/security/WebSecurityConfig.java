package com.zrik.puppify.security;

import com.zrik.puppify.payload.Permissions;
import com.zrik.puppify.security.jwt.AuthEntryPointJwt;
import com.zrik.puppify.security.jwt.JwtAuthenticationFilter;
import com.zrik.puppify.utils.Constants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class WebSecurityConfig {

    @Autowired
    private AuthEntryPointJwt unauthorizedHandler;

    @Bean
    public JwtAuthenticationFilter authenticationJwtTokenFilter() {
        return new JwtAuthenticationFilter();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.cors().and().csrf().disable()
                .exceptionHandling().authenticationEntryPoint(unauthorizedHandler).and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
                .authorizeRequests()
                // Auth urls
                .antMatchers(Constants.AUTH_URL + Constants.LOGIN_URL, Constants.AUTH_URL + Constants.REGISTER_URL)
                .permitAll()
                // User urls
                .antMatchers(HttpMethod.GET, Constants.USER_URL).hasAuthority(Permissions.USER_VIEW_ALL)
                .antMatchers(HttpMethod.PUT, Constants.USER_URL).hasAuthority(Permissions.USER_UPDATE)
                .antMatchers(HttpMethod.DELETE, Constants.USER_URL).hasAuthority(Permissions.USER_DELETE)
                // Order request
                .anyRequest().authenticated();

        return http.addFilterBefore();
    }
}
