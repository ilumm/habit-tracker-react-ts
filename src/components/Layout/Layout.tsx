import React from 'react';
import {useNavigate} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import {Drawer, List, ListItem, ListItemIcon, ListItemText} from '@mui/material';
import AddCircleOutlined from '@mui/icons-material/AddCircleOutlined';
import HabitList from "../HabitList/HabitList.tsx";
import {useSelector} from "react-redux";
import {Habit} from "../../redux/slice/habitsSlice.ts";
import {RootState} from "../../redux/store.tsx";

const Layout = () => {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const habits = useSelector((state:RootState) => state.habits.habits);

    const openMenu = (toggle: boolean) => () => {
        setOpen(toggle);
    };

    const menuItems: { title: string; icon: React.JSX.Element; path: string }[] = [
        {
            title: 'My Habits',
            icon: <AdbIcon sx={{color: '#296729'}}/>,
            path: '/',
        },
        {
            title: 'Add Habit',
            icon: <AddCircleOutlined sx={{color: '#296729'}}/>,
            path: '/addHabits',
        },
    ];

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar sx={{backgroundColor: '#698B69'}} position="static">
                <Toolbar>
                    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{mr: 3}}>
                        <MenuIcon onClick={openMenu(true)}/>
                    </IconButton>

                    <Drawer open={open} onClose={openMenu(false)}>
                        <List sx={{width: '12rem'}} onClick={openMenu(false)}>
                            {menuItems.map((item) => (
                                <ListItem key={item.title} onClick={() => navigate(item.path)}>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.title}/>
                                </ListItem>
                            ))}
                        </List>
                    </Drawer>

                    <Typography variant="h6" component="h1" sx={{mr: 1}}>
                        Habit Tracker
                    </Typography>
                    <AdbIcon/>
                </Toolbar>
            </AppBar>

            {habits.map((habit:Habit) => (
                <HabitList habit={habit} key={habit.title}/>
            ))}
        </Box>
    );
};

export default Layout;
