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
@Table(name = "user_payment", schema = "public", catalog = "postgres")
public class UserPayment {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "user_payment_id", nullable = false)
    private Long userPaymentId;
    @Basic
    @Column(name = "user_id", nullable = false)
    private Long userId;
    @Basic
    @Column(name = "payment_type", nullable = false)
    private Long paymentType;
    @Basic
    @Column(name = "provider", nullable = false)
    private String provider;
    @Basic
    @Column(name = "account_no", nullable = false, length = 19)
    private String accountNo;
    @Basic
    @Column(name = "portal_code", nullable = false, length = 15)
    private String portalCode;
    @Basic
    @Column(name = "expiry", nullable = false)
    private Timestamp expiry;
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
