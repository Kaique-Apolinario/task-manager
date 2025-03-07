package com.kaiqueapol.taskmanager.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kaiqueapol.taskmanager.entities.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {

}
