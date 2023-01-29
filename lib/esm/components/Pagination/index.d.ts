interface Props {
    pageCount: number;
    forcePage?: number;
    onPageChange: (selectedItem: {
        selected: number;
    }) => void;
}
export default function Pagination({ pageCount, forcePage, onPageChange }: Props): JSX.Element;
export {};
