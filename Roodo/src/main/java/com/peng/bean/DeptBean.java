package com.peng.bean;

import java.io.Serializable;
import java.util.Date;

public class DeptBean implements Serializable{
    private Integer deptId;

    private String deptName;

    private Integer upDept;

    private Date addtime;

    private Integer sort;

    private String remark;

    private Integer del;

    public Integer getDeptId() {
        return deptId;
    }

    public void setDeptId(Integer deptId) {
        this.deptId = deptId;
    }

    public String getDeptName() {
        return deptName;
    }

    public void setDeptName(String deptName) {
        this.deptName = deptName == null ? null : deptName.trim();
    }

    public Integer getUpDept() {
        return upDept;
    }

    public void setUpDept(Integer upDept) {
        this.upDept = upDept;
    }

    public Date getAddtime() {
        return addtime;
    }

    public void setAddtime(Date addtime) {
        this.addtime = addtime;
    }

    public Integer getSort() {
        return sort;
    }

    public void setSort(Integer sort) {
        this.sort = sort;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark == null ? null : remark.trim();
    }

    public Integer getDel() {
        return del;
    }

    public void setDel(Integer del) {
        this.del = del;
    }
}