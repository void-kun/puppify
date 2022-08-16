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
public class Role {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "role_id", nullable = false)
    private Long roleId;
    @Basic
    @Column(name = "role_name", nullable = false)
    private String roleName;
    @Basic
    @Column(name = "created_at", nullable = false)
    private Timestamp createdAt;
    @Basic
    @Column(name = "updated_at", nullable = false)
    private Timestamp updatedAt;
    @Basic
    @Column(name = "update_owner")
    private Integer updateOwner;
    @OneToMany(mappedBy = "roleByRoleId")
    private Collection<RolePermission> rolePermissionsByRoleId;
    @OneToMany(mappedBy = "roleByRoleId")
    private Collection<UserRole> userRolesByRoleId;

}
