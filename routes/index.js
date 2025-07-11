const express = require('express');
const router = express.Router();

// 幼儿园数据
const kindergartens = [
    {
        name: "北京市西城区第一幼儿园",
        type: "示范园",
        area: "德胜",
        address: "德胜门内大街甲5号",
        phone: "010-12345678",
        image: "https://via.placeholder.com/400x200"
    },
    {
        name: "北京市西城区实验幼儿园",
        type: "示范园",
        area: "新街口",
        address: "新街口北大街47号",
        phone: "010-23456789",
        image: "https://via.placeholder.com/400x200"
    },
    {
        name: "北京市西城区红莲幼儿园",
        type: "一级园",
        area: "展览路",
        address: "百万庄大街11号",
        phone: "010-34567890",
        image: "https://via.placeholder.com/400x200"
    },
    {
        name: "北京市西城区月坛幼儿园",
        type: "示范园",
        area: "月坛",
        address: "月坛北街25号",
        phone: "010-45678901",
        image: "https://via.placeholder.com/400x200"
    },
    {
        name: "北京市西城区金融街幼儿园",
        type: "一级园",
        area: "金融街",
        address: "金城坊街2号",
        phone: "010-56789012",
        image: "https://via.placeholder.com/400x200"
    }
];

// 首页
router.get('/', (req, res) => {
    res.render('index', {
        currentPage: 'home'
    });
});

// 幼儿园名录
router.get('/kindergarten', (req, res) => {
    res.render('kindergarten', {
        currentPage: 'kindergarten',
        kindergartens: kindergartens
    });
});

// 入园攻略
router.get('/guide', (req, res) => {
    res.render('guide', {
        currentPage: 'guide'
    });
});

// 小学
router.get('/primary', (req, res) => {
    res.render('primary', {
        currentPage: 'primary'
    });
});

// 中学
router.get('/middle', (req, res) => {
    res.render('middle', {
        currentPage: 'middle'
    });
});

// 教育资源
router.get('/resources', (req, res) => {
    res.render('resources', {
        currentPage: 'resources'
    });
});

// 家长社区
router.get('/community', (req, res) => {
    res.render('community', {
        currentPage: 'community'
    });
});

// 登录页面
router.get('/login', (req, res) => {
    res.render('login', {
        currentPage: 'login'
    });
});

// 注册页面
router.get('/register', (req, res) => {
    res.render('register', {
        currentPage: 'register'
    });
});

module.exports = router; 