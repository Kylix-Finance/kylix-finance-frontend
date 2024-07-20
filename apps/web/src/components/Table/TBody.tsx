import { Box, TableBody, TableRow } from "@mui/material";

import TRow from "./TRow";
import { TableData, Header, TBodyProps, TRowProps } from "./types";
import TCell from "./TCell";

interface Props<K extends string> {
	data: TableData<K>;
	headers: Header;
	rowSpacing?: string;
	tBody?: TBodyProps;
	tCellClassnames?: string;
	tRowProps?: TRowProps;
}

function TBody<K extends string>({
	data,
	headers,
	rowSpacing,
	tBody,
	tCellClassnames,
	tRowProps,
}: Props<K>) {
	return (
		<TableBody {...tBody}>
			{data.map((row, index) => (
				<>
					<TRow
						tCellClassnames={tCellClassnames}
						rowSpacing={rowSpacing}
						key={index}
						headers={headers}
						row={row}
						{...tRowProps}
					/>
					{rowSpacing && (
						<TableRow
							style={{
								height: rowSpacing,
							}}
						/>
					)}
				</>
			))}
		</TableBody>
	);
}

export default TBody;
