import {LimbsType, SerializedPattern} from "@/modals/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {StickingPattern} from "@/modals/StickingPattern";


export class Services {

    async getPatterns(type: LimbsType): Promise<StickingPattern[]>{
        console.log("getPatterns()");
        try{
            const storedPatterns = await AsyncStorage.getItem(type);

            return storedPatterns ?
                (JSON.parse(storedPatterns) as SerializedPattern[]).map(pattern => this.parsePattern(pattern))
                :[];
        } catch (error) {
            console.error('Error retrieving patterns:', error);
            return [];
        }
    }

    async addPattern (addedPattern:StickingPattern):Promise<void>{
        console.log("addPattern() - adding: ",addedPattern.name );
        await this.modifyPatterns(addedPattern.LimbType,(patterns:StickingPattern[]) =>
            [...patterns,{...addedPattern, id: this.getNextId(patterns)},]
        );
    }

    async updatePattern (updatedPattern:StickingPattern):Promise<void> {
        console.log("updatePattern() - updating: ",updatedPattern.name );
        await this.modifyPatterns(updatedPattern.LimbType,(patterns:StickingPattern[])=> {
            const index = patterns.findIndex((p) => p.id === updatedPattern.id);
            if (index !== -1) {
                const newPatterns = [...patterns];
                newPatterns[index] = updatedPattern;
                return newPatterns;
            }
            return patterns;
        });
    }

    async deletePattern (deletedPattern:StickingPattern):Promise<void>{
        console.log("deletePattern() - deleting: ",deletedPattern.name );
        await this.modifyPatterns(deletedPattern.LimbType,(patterns:StickingPattern[]) =>
            patterns.filter((p) => p.id !== deletedPattern.id)
        );
    }





    private async modifyPatterns(limbType: LimbsType, modifier: (patterns: StickingPattern[]) => StickingPattern[]): Promise<void> {
        try {
            const patterns = await this.getPatterns(limbType);
            const updated = modifier(patterns);
            await AsyncStorage.setItem(
                limbType,
                JSON.stringify(updated.map(this.serializedPattern))
            );
        } catch (error) {
            console.error(`Error modifying ${limbType} patterns:`, error);
            throw error;
        }
    }

    private getNextId(patterns: StickingPattern[]): string {
        const maxId = patterns.reduce((max, p) => {
            const id =parseInt(p.id,10);
            return !isNaN(id) && id > max ? id : max;
        }, 0);
        return (maxId + 1).toString();
    }

    private parsePattern(serialized:SerializedPattern ):StickingPattern{
        return  new StickingPattern(
            serialized.id,
            serialized.name,
            serialized.LimbType,
            serialized.description,
            serialized.pattern,
            serialized.tempo
        );
    }

    private serializedPattern(pattern:StickingPattern):SerializedPattern{
        return {
            id: pattern.id,
            name: pattern.name,
            LimbType: pattern.LimbType,
            description: pattern.description,
            pattern: pattern.pattern,
            tempo: pattern.tempo
        };
    }

    //
}
export const services = new Services();
