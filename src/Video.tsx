import { DotsSixVertical, Minus, Plus } from "@phosphor-icons/react";
import { useFormContext } from "react-hook-form";
import {
    DndContext,
    DragEndEvent,
    DragOverlay,
    DragStartEvent,
    Modifier,
    PointerSensor,
    closestCenter,
    useDraggable,
    useSensor,
    useSensors,
} from "@dnd-kit/core";
import {
    restrictToFirstScrollableAncestor,
    restrictToHorizontalAxis,
    restrictToParentElement,
    snapCenterToCursor,
} from "@dnd-kit/modifiers";
import {
    SortableContext,
    arrayMove,
    horizontalListSortingStrategy,
    useSortable,
} from "@dnd-kit/sortable";
import { useState } from "react";
import React from "react";
import { createPortal } from "react-dom";

const spacerToLabels: Record<string, string> = {
    "-": "Hyphen ( - )",
    _: "Underscore ( _ )",
};
type NamingSchemeElement = "Sensor" | "Location" | "Type" | "Number";

export interface NamingScheme {
    prefix: string;
    suffix: string;
    spacer: string;
    namingSchemeElements: NamingSchemeElement[];
}

export const NamingSchemeString = () => {
    const { watch, formState } = useFormContext<NamingScheme>();

    const watchPrefix = watch("prefix");
    const watchSpacer = watch("spacer", "_");
    const watchSuffix = watch("suffix");

    return (
        <>
            <div>Naming Scheme String</div>
            <div className="bg-white/5 text-white relative flex gap-1 overflow-x-auto rounded-md p-4 text-opacity-70">
                <div className="flex gap-1">
                    {watchPrefix}
                    {watchPrefix && <div>{watchSpacer}</div>}
                </div>
                <SelectedNamingSchemeElements />
                <div className="flex gap-1">
                    {watchSuffix && <div>{watchSpacer}</div>}
                    {watchSuffix}
                </div>
            </div>
        </>
    );
};

const SelectedNamingSchemeElements = () => {
    const { watch, setValue } = useFormContext<NamingScheme>();

    const watchElements = watch("namingSchemeElements");
    const watchSpacer = watch("spacer", "_");

    const sensors = useSensors(useSensor(PointerSensor));
    const [activeId, setActiveId] = useState<number | null>(null);

    function handleDragStart(event: DragStartEvent) {
        const { active } = event;
        setActiveId(active.id as number);
    }
    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event;
        if (active && over && active.id !== over.id) {
            const oldSortIndex = active.id as number;
            const newSortIndex = over.id as number;

            const watchElementsReordered = arrayMove(
                watchElements,
                oldSortIndex - 1, // Sortable indexes start at 1, index of watchElements starts at 0
                newSortIndex - 1,
            );
            setValue("namingSchemeElements", watchElementsReordered);
            setActiveId(null);
        }
    }

    function getTagPropsFromId(watchElementsId: number) {
        return {
            label: watchElements.at(watchElementsId),
        };
    }

    const snapToGrid: Modifier = ({
        containerNodeRect,
        draggingNodeRect,
        transform,
    }) => {
        if (!draggingNodeRect || !containerNodeRect) {
            return transform;
        }

        console.log("i am here");
        console.table({ draggingNodeRect, containerNodeRect, transform });

        return {
            ...transform,
            x: transform.x - 200,
            y: transform.y - 200,
        };
    };

    return (
        <DndContext
            sensors={sensors}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            collisionDetection={closestCenter}
            modifiers={[restrictToHorizontalAxis]}
        >
            <SortableContext
                items={watchElements}
                strategy={horizontalListSortingStrategy}
            >
                {watchElements.map((element, mapIndex) => {
                    return (
                        <>
                            <div>
                                {mapIndex > 0 && <div>{watchSpacer}</div>}
                            </div>
                            <SortableTag
                                key={mapIndex + 1} // Convert from .map index (from 0) to sort index (from 1)
                                index={mapIndex + 1}
                                label={getTagPropsFromId(mapIndex).label}
                            />
                        </>
                    );
                })}
            </SortableContext>
            {createPortal(
                <DragOverlay dropAnimation={null} modifiers={[snapToGrid]}>
                    {activeId ? (
                        <div className="absolute left-0 flex flex-row items-center bg-curious-blue-900 p-2 text-curious-blue-400">
                            <DotsSixVertical />
                        </div>
                    ) : null}
                </DragOverlay>,
                document.body,
            )}
        </DndContext>
    );
};

export function SortableTag({
    index,
    label,
}: {
    index: number;
    label?: string;
}) {
    const {
        attributes,
        listeners,
        setNodeRef,
        isDragging,
        transform,
        transition,
        setActivatorNodeRef,
    } = useSortable({
        id: index,
    });

    const style = {
        transform: transform?.toString(),
        transition,
    };

    return isDragging ? null : (
        <div
            id={index.toString()}
            style={style}
            className="flex flex-row items-center bg-curious-blue-900 p-2 text-curious-blue-400"
            ref={setNodeRef}
            {...attributes}
        >
            <DotsSixVertical {...listeners} />
            {label}
        </div>
    );
}
