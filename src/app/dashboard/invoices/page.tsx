import { Suspense } from "react"
import Pagination from "@/app/ui/invoices/pagination"
import Search from "@/app/ui/search"
import { CreateInvoice } from "@/app/ui/invoices/buttons"
import InvoicesTable from "@/app/ui/invoices/table"
import { fetchInvoicesPage } from "@/app/lib/data"

export default async function Page({searchParams}: {searchParams?:{ query?: string, page?: number }}) {
    const query = searchParams?.['query'] || '';
    const currentPage = searchParams?.['page'] || 1;
    const totalPages = await fetchInvoicesPage(query) 

    return (
        <div className="w-full">
            <div className="w-full flex flex-row items-center justify-between">
                <h1 className="text-2xl">Invoices</h1>
            </div>
            <div className="mt-4 md:mt-8 gap-2 flex flex-row items-center justify-between">
                <Search placeholder='Search invoices...' />
                <CreateInvoice />
            </div>
            <InvoicesTable query={query} currentPage={currentPage} />
            <div className="mt-5 w-full flex justify-center">
                <Pagination totalPages={totalPages}/>
            </div>
        </div>
    )
}