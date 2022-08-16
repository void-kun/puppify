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
public class Permission {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "permission_id", nullable = false)
    private Long permissionId;
    @Basic
    @Column(name = "permission_name", nullable = false)
    private String permissionName;
    @Basic
    @Column(name = "created_at", nullable = false)
    private Timestamp createdAt;
    @Basic
    @Column(name = "updated_at", nullable = false)
    private Timestamp updatedAt;
    @Basic
    @Column(name = "update_owner")
    private Integer updateOwner;
    @OneToMany(mappedBy = "permissionByPermissionId")
    private Collection<RolePermission> rolePermissionsByPermissionId;

}
