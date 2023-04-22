const TableComponent = (props: any) => {
    return (
        <table className="main-table">
            <thead>
                <tr>
                    {props.headings?.map((heading: any, index: number) => (
                        !heading.hide ?
                            <th scope="col" key={index}>{heading.title}</th> : null
                    ))}

                </tr>
            </thead>
            <tbody>
                {props.data?.map((item: any, index: number) => (
                    <tr key={index} >
                        {props.headings?.map((heading: any, headingIndex: number) => (
                            !heading.hide ?
                                headingIndex == 0 ?
                                    <td data-title={heading.title} key={headingIndex} onClickCapture={() => props.itemClick(item)}>
                                        <u className="underline-view-link" role='link' tabIndex={0}>{item[heading.key] || 'NA'}</u>
                                    </td> :
                                    <td data-title={heading.title} key={headingIndex} >
                                        {item[heading.key]?.toString() || 'NA'}</td> : null
                        ))}
                    </tr>
                ))}
            </tbody>
        </table >
    )
}
export default TableComponent;