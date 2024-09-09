import { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import { Avatar, Box, Chip, FormControl, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Paper, Select, SelectChangeEvent, Stack, TextareaAutosize, Typography } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ClearIcon from '@mui/icons-material/Clear';

export default function Registration() {
    const names = ['Adí Santos', 'Adí Santos 2'];
    const nameTags = ['Web', 'LES'];

    const [responsibles, setResponsibles] = useState<string[]>([]);
    const [tags, setTags] = useState<string[]>([])
    const [files, setFiles] = useState<File[]>([new File( [],'imagemParaTeste.png'), new File( [],'imagemParaTeste2.png')])

    const handleFilesDelete = () => {

    }

    const handleChangeResponsibles = (event: SelectChangeEvent<typeof responsibles>) => {
        let value = event.target.value;
        setResponsibles(typeof value === 'string' ? value.split(',') : value);
    };

    const handleChangeTags = (event: SelectChangeEvent<typeof responsibles>) => {
        let value = event.target.value;
        setTags(typeof value === 'string' ? value.split(',') : value);
    };
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <TextField id="outlined-basic" label="Title" variant="outlined" />
            <TextField id="outlined-basic" label="Subtitle" variant="outlined" />

            <div>
                <FormControl sx={{ marginRight: 1, width: 300 }}>
                    <InputLabel id="demo-multiple-chip-label">Responsible Persons</InputLabel>
                    <Select labelId="demo-multiple-chip-label" id="demo-multiple-chip" multiple value={responsibles} onChange={handleChangeResponsibles} input={<OutlinedInput id="select-multiple-responsibles-persons" label="Responsibles persons" />}
                        renderValue={(selected) => (
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                {selected.map((value) => (
                                    <Chip key={value} label={value} />
                                ))}
                            </Box>
                        )}
                    >
                        {names.map((name) => (
                            <MenuItem key={name} value={name}>{name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl sx={{ width: 300 }}>
                    <InputLabel id="demo-multiple-chip-label">Tags</InputLabel>
                    <Select labelId="demo-multiple-chip-label" id="demo-multiple-chip" multiple value={tags} onChange={handleChangeTags} input={<OutlinedInput id="select-multiple-tags" label="Tags" />}
                        renderValue={(selected) => (
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                {selected.map((value) => (
                                    <Chip key={value} label={value} />
                                ))}
                            </Box>
                        )}
                    >
                        {nameTags.map((name) => (
                            <MenuItem key={name} value={name}>{name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>

            </div>

            <TextField id="outlined-basic" label="Estamated time" variant="outlined" sx={{ width: 400 }} />
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-estimated-time">Estimated time</InputLabel>
          <OutlinedInput
            id="outlined-adornment-estimated-time"
            endAdornment={
              <InputAdornment position="end">h</InputAdornment>
            }
            label="Estimated time"
          />
        </FormControl>

            <Box sx={{ border: '1px solid', height: '100vh', borderRadius: 4, borderColor: '#707070', padding: 2, paddingRight: 4 }}>
                <div style={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                    <IconButton color="primary" aria-label="add to shopping cart">
                        <AddShoppingCartIcon />
                    </IconButton>
                </div>
                <Stack spacing={2}>
                    <Paper sx={{ height: '32em', padding: 2 }}>
                        <Typography>Precondition</Typography>
                        <TextField
                            id="outlined-multiline-static"
                            label=""
                            multiline
                            rows={4}
                            fullWidth={true}
                        />

                        <Typography sx={{ marginTop: 2 }}>Steps</Typography>
                        <TextField
                            id="outlined-multiline-static"
                            label=""
                            multiline
                            rows={4}
                            fullWidth={true}
                        />

                        <Typography sx={{ marginTop: 2 }}>Expected results</Typography>
                        <TextField
                            id="outlined-multiline-static"
                            label=""
                            multiline
                            rows={4}
                            fullWidth={true}
                        />

                        <div style={{ display: 'flex', flexDirection: 'row', gap: 2, marginTop: 2 }}>
                            <IconButton color="primary" aria-label="add to shopping cart">
                                <AttachFileIcon />
                            </IconButton>

                            {files?.map(file => 
                                <Chip sx={{margin: 1}} label={file.name} size='small' variant="outlined" onDelete={handleFilesDelete} deleteIcon={<ClearIcon />}/>
                            )}

                        </div>
                    </Paper>
                </Stack>
            </Box>
        </div>
    );
}