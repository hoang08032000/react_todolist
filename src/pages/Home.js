import {
    Box,
    Button,
    Checkbox,
    Divider,
    FormControlLabel,
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TextField,
    Typography,
} from "@mui/material";
import { useContext, useState } from "react";

import Label from "~/components/label";
import { TodoContext } from "~/contexts/TodoContext";
import { getRandomString } from "~/utils";

const HomePage = () => {
    const { todoList, setTodoList } = useContext(TodoContext);

    const [todo, setTodo] = useState("");

    const handleAddTodo = () => {
        if (todo) {
            setTodoList([
                ...todoList,
                { id: getRandomString(), task: todo, status: false },
            ]);
            setTodo("");
        }
    };

    const handleChangeStatus = (e, index) => {
        todoList[index].status = e.target.checked;
        setTodoList([...todoList]);
    };

    const headCells = [
        {
            id: "task",
            numeric: false,
            disablePadding: false,
            label: "Công việc",
        },
        {
            id: "status",
            numeric: false,
            disablePadding: false,
            label: "Trạng thái",
        },
        { id: "" },
    ];

    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                my: 5,
            }}
        >
            <Typography variant="h4" component="h4">
                Todo List
            </Typography>
            <Paper sx={{ minWidth: 750, mt: 3, p: 2 }}>
                <Grid container spacing={2} mb={3}>
                    <Grid item sm={10}>
                        <TextField
                            fullWidth
                            size="small"
                            placeholder="Thêm công việc"
                            value={todo || ""}
                            onChange={(e) => setTodo(e.target.value)}
                        />
                    </Grid>
                    <Grid item sm={2}>
                        <Button variant="contained" onClick={handleAddTodo}>
                            Thêm
                        </Button>
                    </Grid>
                </Grid>
                <Divider />
                <Table>
                    <TableHead>
                        <TableRow>
                            {headCells.map((headCell) => (
                                <TableCell
                                    key={headCell.id}
                                    align={headCell.numeric ? "right" : "left"}
                                    padding={
                                        headCell.disablePadding
                                            ? "none"
                                            : "normal"
                                    }
                                    sx={{
                                        fontSize: 14,
                                        fontWeight: 600,
                                    }}
                                >
                                    {headCell.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {todoList.map((row, index) => (
                            <TableRow key={index} hover>
                                <TableCell align="left">{row.task}</TableCell>
                                <TableCell align="left">
                                    <Label
                                        color={row.status ? "success" : "error"}
                                    >
                                        {row.status ? "Hoàn thành" : "Cần làm"}
                                    </Label>
                                </TableCell>
                                <TableCell align="right">
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={row.status}
                                                onChange={(e) =>
                                                    handleChangeStatus(e, index)
                                                }
                                            />
                                        }
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </Box>
    );
};

export default HomePage;
