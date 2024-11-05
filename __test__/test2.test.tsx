import { render, screen } from "@testing-library/react"
import Banner from "@/components/Banner";
import { userEvent } from "@testing-library/user-event"
import TopMenu from "@/components/TopMenu";

// Mock useRouter
jest.mock('next/navigation', ()=>({
    useRouter() {
        return {
            prefetch: ()=>null
        }
    }
}))
// Mock useSession
jest.mock("next-auth/react", ()=>({
    useSession() {
        return {data: null, user: {name: "Tester"}}
    }
}))

describe("ReservationMenu", ()=>{
    it("should have title", ()=>{
        //Arrange
        render(<TopMenu/>)
        //Act
        const image = screen.getByRole("img")
        const links = screen.getAllByRole("link")
        //Assert
        const allLinks = ["/", "/car", "/reservations", "/cart", "/about"]
        expect(image).not.toBeNull()
        for (let i=0;i<allLinks.length;i++){
            console.log(links[i].getAttribute('href'))
            expect(links[i].getAttribute('href')).toBe(allLinks[i])
        }
    })
})







