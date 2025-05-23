import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../RTK/store.tsx";
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import HabitWeek from "../HabitWeek/HabitWeek.tsx";
import {Habit} from "../../RTK/slice/habitsSlice.ts";
import AndroidIcon from '@mui/icons-material/Android';

const HabitList = () => {
    const customFont = "'Rubik Doodle Shadow', sans-serif";
    const habitsList = useSelector((state: RootState) => state.habits.habits);

    return (
        <>
            {habitsList.map((habit: Habit) => (
                <div key={habit.title}>
                    <Typography className={'word-space-normal'}
                                variant="h6"
                                sx={{
                                    fontFamily: customFont,
                                    padding: '5px',
                                    margin: '10px 0',
                                    backgroundColor: '#fffbe1',
                                    border: '1px solid #e9e90c',
                                    display: 'flex',
                                    borderRadius: '6px',
                                    alignItems: 'center'
                                }}
                    >
                        <AndroidIcon sx={{mx: '15px'}}/> {habit.title}
                    </Typography>

                    <Typography sx={{
                        mb: '15px',
                        borderBottom: '1px solid #eeee1f;',
                        borderRadius: '7px',
                        width: '50%',
                        padding: '5px'
                    }}>
                        {habit.description}
                    </Typography>

                    <Container sx={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'baseline',
                        padding: '10px',
                    }}>
                        {habit.week.map((weekDay) => (
                            <HabitWeek
                                key={`${habit.title}-${weekDay.day}`}
                                status={weekDay.status}
                                day={weekDay.day}
                                title={habit.title}
                                id={weekDay.id}
                            />
                        ))}
                    </Container>

                    <Divider sx={{my: 2, mb: '40px'}}/>
                </div>
            ))}
        </>
    );
};

export default HabitList;
