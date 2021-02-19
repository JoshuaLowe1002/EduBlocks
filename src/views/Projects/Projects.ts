import { files, FirebaseFile } from "@/providers/files";
import { Platform } from "@/platforms/platforms";
import router from "@/router/index";
import { DropdownOptions } from "@/types";

export default class Projects {
	public getFirebaseFiles(): any {
		return files.getAllFilesFromFirebase();
	}

	public goToLoginPage(): void {
		router.push({path: "/login"});
	}

	public getDropdownOptions(file: FirebaseFile): Array<DropdownOptions> {
		return [
			{ icon: "folder", title: "Open", action: (): void => { 
				files.openFirebaseFile(file); 
			}},
			{ icon: "share", title: "Share", action: (): void => { 
				files.openFirebaseFile(file); 
			}},
			{ icon: "trash", title: "Delete", action: (): void => { 
				files.deleteFirebaseFile(file.ref); 
			}},
		];
	}

	public removePlatformFromFileName(name: string): string {
		let output: string = "";
		if (name.includes("(Python)")) {
			output = name.replace("(Python)", "");
		}
		else if (name.includes("(microbit)")) {
			output = name.replace("(microbit)", "");
		}
		else if (name.includes("(CircuitPython)")) {
			output = name.replace("(CircuitPython)", "");
		}
		else if (name.includes("(RPi)")) {
			output = name.replace("(RPi)", "");
		}
		return output;
	}

	public getPlatformFromFileName(name: string): Platform {
		let output: Platform = Platform.Python;
		if (name.includes("(Python)")) {
			output = Platform.Python;
		}
		else if (name.includes("(microbit)")) {
			output = Platform.MicroBit;
		}
		else if (name.includes("(CircuitPython)")) {
			output = Platform.CircuitPython;
		}
		else if (name.includes("(RPi)")) {
			output = Platform.RaspberryPi;
		}
		return output;
	}

	public getPlatformVariantFromFileName(name: string): string {
		let output: string = "";
		if (name.includes("(Python)")) {
			output = "Blue";
		}
		else if (name.includes("(microbit)")) {
			output = "Green";
		}
		else if (name.includes("(CircuitPython)")) {
			output = "Purple";
		}
		else if (name.includes("(RPi)")) {
			output = "Red";
		}
		return output;
	}

	public getPlatformIconFromFileName(name: string): string {
		let output: string = "";
		if (name.includes("(Python)")) {
			output = "python";
		}
		else if (name.includes("(microbit)")) {
			output = "microbit";
		}
		else if (name.includes("(CircuitPython)")) {
			output = "circuitpython";
		}
		else if (name.includes("(RPi)")) {
			output = "raspberrypi";
		}
		return output;
	}

	public delete(ref: firebase.default.storage.Reference): void {
		files.deleteFirebaseFile(ref);
	}
}

export const projects: Projects = new Projects();