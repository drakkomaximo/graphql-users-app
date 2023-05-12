import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { FC, useState, ReactNode } from "react";
import { SelectOptionsTypes } from "../../interfaces";
import { selectLabels, selectOptions } from "../../utils";

type UserSelectProps = {
  error: boolean;
  errorMessage?: string;
  typeSelect: SelectOptionsTypes;
  value: string;
  onChange: (event: SelectChangeEvent<string>, child: ReactNode) => void;
};

export const UserSelect: FC<UserSelectProps> = ({
  error,
  errorMessage,
  typeSelect,
  value,
  onChange,
}) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const generateRadioOptions = ({ type }: { type: SelectOptionsTypes }) =>
    selectOptions({ type }).map((singleOption) => (
      <MenuItem key={singleOption.id} value={singleOption.value}>
        {singleOption.label}
      </MenuItem>
    ));

  return (
    <FormControl error={error} sx={{ marginTop: "1rem" }}>
      <InputLabel id="gender-radio">
        {selectLabels({ type: typeSelect })}
      </InputLabel>
      <Select
        labelId={`${selectLabels({ type: typeSelect })}-select-label`}
        id={`${selectLabels({ type: typeSelect })}-open-select`}
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        value={value}
        label={selectLabels({ type: typeSelect })}
        onChange={onChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {generateRadioOptions({ type: typeSelect })}
      </Select>
      {errorMessage && <FormHelperText>{errorMessage}</FormHelperText>}
    </FormControl>
  );
};
