
interface Props {
    page: number,
    number: number,
    setter: (page: number) => void,
}

const Page = ({ page, number, setter }: Props) => (
    <li className={page === number ? "page-item active" : "page-item"} onClick={() => setter(number)}>
        <span className="page-link">{number}</span>
    </li>
)

export default Page;