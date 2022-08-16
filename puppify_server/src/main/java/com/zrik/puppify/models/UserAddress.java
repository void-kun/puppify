package com.zrik.puppify.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Timestamp;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "user_address", schema = "public", catalog = "postgres")
public class UserAddress {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "user_address_id", nullable = false)
    private Long userAddressId;
    @Basic
    @Column(name = "user_id", nullable = false)
    private Long userId;
    @Basic
    @Column(name = "address_line1", nullable = false)
    private String addressLine1;
    @Basic
    @Column(name = "address_line2", nullable = false)
    private String addressLine2;
    @Basic
    @Column(name = "city", nullable = false, length = 19)
    private String city;
    @Basic
    @Column(name = "portal_code", nullable = false, length = 15)
    private String portalCode;
    @Basic
    @Column(name = "country", nullable = false)
    private String country;
    @Basic
    @Column(name = "telephone", nullable = false, length = 18)
    private String telephone;
    @Basic
    @Column(name = "created_at", nullable = false)
    private Timestamp createdAt;
    @Basic
    @Column(name = "updated_at", nullable = false)
    private Timestamp updatedAt;
    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "user_id", nullable = false)
    private User userByUserId;

}
