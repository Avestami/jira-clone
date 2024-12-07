import {Button} from "@/components/ui/button"
import {TestComponent} from "@/features/page"
export default function Home() {
  return (
      <div>
        <Button variant="test" size="sm">click me</Button>
          <p className="text-red-500 font-semibold">
              HELLO
              <TestComponent></TestComponent>
          </p>
      </div>
  )
}
