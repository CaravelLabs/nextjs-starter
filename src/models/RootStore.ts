import { makeAutoObservable } from 'mobx'
import { v4 as uuidv4 } from 'uuid'

export class RootStore {
    public sessionId: string
    public toast: ToastStore

    constructor() {
        this.sessionId = uuidv4()
        this.toast = new ToastStore()
        makeAutoObservable(this)
    }

    public successToast(message: string): void {
        this.toast.message = message
        this.toast.severity = 'success'
        this.toast.isOpen = true
    }

    public errorToast(message: string): void {
        this.toast.message = message
        this.toast.severity = 'error'
        this.toast.isOpen = true
    }
}

export class ToastStore {
    public isOpen: boolean
    public message: string
    public severity: 'success' | 'error'

    constructor() {
        this.isOpen = false
        this.message = ''
        this.severity = 'success'
        makeAutoObservable(this)
    }

    public close(): void {
        this.isOpen = false
    }
}
