package com.zrik.puppify.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Collection;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class User {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "user_id", nullable = false)
    private Long userId;
    @Basic
    @Column(name = "username", nullable = false)
    private String username;
    @Basic
    @Column(name = "hash_password", nullable = false)
    private String hashPassword;
    @Basic
    @Column(name = "firstname", length = 50)
    private String firstname;
    @Basic
    @Column(name = "lastname", length = 50)
    private String lastname;
    @Basic
    @Column(name = "telephone", length = 18)
    private String telephone;
    @Basic
    @Column(name = "email", nullable = false)
    private String email;
    @Basic
    @Column(name = "email_verify_at")
    private Timestamp emailVerifyAt;
    @Basic
    @Column(name = "remember_token")
    private String rememberToken;
    @Basic
    @Column(name = "lasttime_loggedin")
    private Timestamp lasttimeLoggedin;
    @Basic
    @Column(name = "actived")
    private Boolean actived;
    @Basic
    @Column(name = "created_at", nullable = false)
    private Timestamp createdAt;
    @Basic
    @Column(name = "updated_at", nullable = false)
    private Timestamp updatedAt;
    @OneToMany(mappedBy = "userByUserId")
    private Collection<UserAddress> userAddressesByUserId;
    @OneToMany(mappedBy = "userByUserId")
    private Collection<UserPayment> userPaymentsByUserId;
    @OneToMany(mappedBy = "userByUserId")
    private Collection<UserRole> userRolesByUserId;
    @OneToMany(mappedBy = "userByUserId")
    private Collection<Order> ordersByUserId;
}
